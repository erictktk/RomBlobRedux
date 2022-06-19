export function EntityComponent(props) {
  //@type {entity}
  const entity = props.entity; // @type: Entity
  const id = props.entity.id;
  const name = entity.name;
  const tags = entity.tags;

  const dispatch = useDispatch();
  const [viewMetaData, toggleMetaDataView] = useState(false);
  const [isRemoving, toggleRemoving] = useState(false);

  const cancelCallback = () => {
    toggleRemoving();
  };

  const onEditContents = (e, fieldName) => {
    const payload = [id, fieldName, e.target.value];
    console.log(payload);
    dispatch(editEntity(payload));
  };

  const onRemoveEntity = (e) => {
    const payload = { id: id };

    dispatch(removeEntity(payload));
  };

  let tagsString = "";
  for (let i = 0; i < tags.length; i += 1) {
    if (i !== tags.length - 1) {
      tagsString += tags[i] + " ";
    } else {
      tagsString += tags[i];
    }
  }
  /*
  <input
    type="text"
    className="entity-Component-Name"
    //onInput= { (e)=>{ onEditContents}}
    onInput={(e) => onEditContents(e, "name")}
    defaultValue={entity.name}
  />*/

  return (
    <>
      <div className="entity-Component-Container">
        <div className="entity-Component-Header">
          <div style={{ display: "flex" }}>
            Name: &nbsp;
            <EntityField
              initValue={entity.name}
              callback={(e) => {
                onEditContents(e, "name");
              }}
            />
          </div>
          <div>
            <button onClick={toggleRemoving}>Remove</button>
          </div>
        </div>
        <div className="entity-Component-Body">
          <div className="entity-Component-Body-Inside">
            <div className="entity-Component-Info1">
              <EntityLabel label="Memory Address:" />
              <input
                type="text"
                //className="E"
                onInput={(e) => onEditContents(e, "memoryPosition")}
                defaultValue={entity.memoryPosition.toString(16)}
              />
              <EntityLabel label="Original Value: " />
              <input
                type="text"
                onInput={(e) => onEditContents(e, "originalValue")}
                defaultValue={entity.originalValue}
              />
              <EntityLabel label="New Value: " />
              <input
                type="text"
                onInput={(e) => onEditContents(e, "originalValue")}
                defaultValue={entity.newValue}
              />
            </div>
            <div className="entity-Component-Info2">
              <div className="entity-Component-InfoEntry">
                <EntityLabel2 label={"Tags:"} />
                <input
                  type="text"
                  //className="E"
                  onInput={(e) => onEditContents(e, "tags")}
                  defaultValue={tagsString}
                  style={{ width: "330px" }}
                />
              </div>
              <div className="entity-Component-InfoEntry">
                <EntityLabel2 label={"Description:"} />
                <textarea cols={60} />
              </div>
              <div
                className="entity-Component-DropdownLink"
                onClick={() => toggleMetaDataView(!viewMetaData)}
              >
                Metadata:
              </div>
              {viewMetaData && (
                <>
                  <div className="entity-Component-InfoEntry">
                    <EntityLabel2 label={"Author:"} />
                    <div className="entity-Component-Field2">
                      {entity.author}
                    </div>
                  </div>
                  <div className="entity-Component-InfoEntry">
                    <EntityLabel2 label={"Date Added: "} />
                    <div className="entity-Component-Field2">
                      {entity.dateAdded.toString()}
                    </div>
                  </div>
                  <div className="entity-Component-InfoEntry">
                    <EntityLabel2 label={"Comments: "} />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {isRemoving && (
        <RemoveEntityModalDialogBox
          entity={entity}
          confirmCallback={onRemoveEntity}
          cancelCallback={cancelCallback}
        />
      )}
    </>
  );
}

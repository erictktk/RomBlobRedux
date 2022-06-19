import { EntityLabel, EntityLabel2 } from "./entityComponentViz";

export function EntityVizAlone(props) {
  const entity = props.entity; // @type: Entity
  const id = entity.id;
  const name = entity.name;
  const tags = entity.tags;

  let tagsString = "";
  for (let i = 0; i < tags.length; i += 1) {
    if (i !== tags.length - 1) {
      tagsString += tags[i] + ", ";
    } else {
      tagsString += tags[i];
    }
  }

  const [viewMetaData, toggleMetaDataView] = useState(false);

  return (
    <div className="page">
      <div className="entities-View">
        <div className="entity-Component-Container">
          <div className="entity-Component-Header">
            Name:
            <input
              type="text"
              className="entity-Component-Name-Field"
              //onInput= { (e)=>{ onEditContents}}
              defaultValue={name}
            />
          </div>
          <div className="entity-Component-Info1">
            <EntityLabel label={"Memory Position:"} />0 (not yet implemented)
            <br />
            <EntityLabel label={"Original Value:"} />
            {entity.originalValue}
            <EntityLabel label={"New Value:"} />
            <div className="entity-Component-Field">{entity.newValue}</div>
          </div>
          <div className="entity-Component-Info2">
            <div className="entity-Component-InfoEntry">
              <EntityLabel2 label={"Tags:"} />
              {tagsString}
            </div>
            <div className="entity-Component-InfoEntry">
              <EntityLabel2 label={"Description:"} />
              <textarea />
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
                  {entity.author}
                </div>
                <div className="entity-Component-InfoEntry">
                  <EntityLabel2 label={"Date Added: "} />
                  {entity.dateAdded.toString()}
                </div>
                <div className="entity-Component-InfoEntry">
                  <EntityLabel2 label={"Comments: "} />
                </div>
              </>
            )}
          </div>
          <div className="entity-Component-Desc-Container"></div>
        </div>
      </div>
    </div>
  );
}

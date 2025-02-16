import { SchemaField } from "./SchemaField";
import { Schema } from "@amplication/code-gen-types";
import * as models from "../models";

type Props = {
  schema: Schema;
  entity: models.Entity;
  resourceId: string;
  isDisabled?: boolean;
};

export const SchemaFields = ({ schema, resourceId, entity }: Props) => {
  if (schema === null) {
    return null;
  }

  if (schema.type !== "object") {
    throw new Error(`Unexpected type ${schema.type}`);
  }

  return (
    <div>
      {Object.entries(schema.properties).map(([name, property]) => {
        if (!property) {
          throw new Error(`Missing property: ${name}`);
        }
        return (
          <div key={name}>
            <SchemaField
              propertyName={name}
              propertySchema={property as Schema}
              resourceId={resourceId}
              entity={entity}
            />
          </div>
        );
      })}
    </div>
  );
};

import createApiSpec from "~/apiSpecs";
import { Character } from "./character.model";

createApiSpec(Character, "character", { name: "Kaleb", relationshipToWill: "friend" });

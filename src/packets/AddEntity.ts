import { Endianness } from '@serenityjs/binarystream';
import { Packet, Serialize, BigString, Float32, VarInt, VarLong, ZigZong } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';
import type { EntityAttribute, EntityLink } from '../types';
import { Vec3f, Vector3f, EntityAttributes, EntityProperties, EntityProperty, EntityLinks } from '../types';

@Packet(0x0d, VarInt)
class AddEntity extends Encapsulated {
	@Serialize(ZigZong) public uniqueEntityId!: bigint;
	@Serialize(VarLong) public runtimeId!: bigint;
	@Serialize(BigString) public entityType!: string;

	@Serialize(Vector3f) public position!: Vec3f;
	@Serialize(Vector3f) public motion!: Vec3f;

	@Serialize(Float32, Endianness.Little) public pitch!: number;
	@Serialize(Float32, Endianness.Little) public yaw!: number;
	@Serialize(Float32, Endianness.Little) public headYaw!: number;
	@Serialize(Float32, Endianness.Little) public bodyYaw!: number;

	@Serialize(EntityAttributes) public attributes!: EntityAttribute[];

	// todo?? Need to look into how metadata is serialized
	@Serialize(VarInt) public metadata!: 0;
	//	this.writeVarInt(0);

	@Serialize(EntityProperties) public properties!: EntityProperty;
	@Serialize(EntityLinks) public links!: EntityLink[];
}

export { AddEntity };

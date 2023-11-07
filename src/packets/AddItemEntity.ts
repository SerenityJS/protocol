import { Packet, Serialize, Bool, VarInt, VarLong, ZigZong } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';
import { IItem, Item, Vec3f, Vector3f } from '../types';

@Packet(0x0f, VarInt)
class AddItemEntity extends Encapsulated {
	@Serialize(ZigZong) public uniqueEntityId!: bigint;
	@Serialize(VarLong) public runtimeId!: bigint;
	@Serialize(Item) public item!: IItem;
	@Serialize(Vector3f) public position!: Vec3f;
	@Serialize(Vector3f) public motion!: Vec3f;
	@Serialize(VarInt) public metadata!: 0; // TODO
	@Serialize(Bool) public fromFishing!: boolean;
}

export { AddItemEntity };

import { Packet, Serialize } from '@serenityjs/raknet.js';
import { UInt8, VarInt, VarLong } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';
import { Rot, Rotation, Vec3f, Vector3f } from '../types';

@Packet(0x12, VarInt)
class MoveEntity extends Encapsulated {
	@Serialize(VarLong) public runtimeId!: bigint;
	@Serialize(UInt8) public flags!: number;
	@Serialize(Vector3f) public position!: Vec3f;
	@Serialize(Rotation) public rotation!: Rot;
}

export { MoveEntity };

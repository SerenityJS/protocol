import { VarInt, UInt8, VarLong, Packet, Serialize } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';
import { Vec3f, Vector3f } from '../types';

@Packet(0x2d, VarInt)
class Respawn extends Encapsulated {
	@Serialize(Vector3f) public position!: Vec3f;
	@Serialize(UInt8) public state!: number;
	@Serialize(VarLong) public runtimeEntityId!: bigint;
}

export { Respawn };

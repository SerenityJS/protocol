import { VarInt, VarLong, Packet, Serialize } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';
import { Vec3f, Vector3f } from '../types';

@Packet(0x28, VarInt)
class SetEntityMotion extends Encapsulated {
	@Serialize(VarLong) public runtimeId!: bigint;
	@Serialize(Vector3f) public motion!: Vec3f;
}

export { SetEntityMotion };

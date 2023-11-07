import { Packet, Serialize, VarInt, ZigZag } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';
import { Vec3f, Vector3f } from '../types';

@Packet(0x19, VarInt)
class LevelEvent extends Encapsulated {
	@Serialize(ZigZag) public event!: number; // TODO: enum
	@Serialize(Vector3f) public position!: Vec3f;
	@Serialize(ZigZag) public data!: number;
}

export { LevelEvent };

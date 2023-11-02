import { Packet, Serialize } from '@serenityjs/raknet.js';
import { VarInt, ZigZag } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x46, VarInt)
class ChunkRadiusUpdate extends Encapsulated {
	@Serialize(ZigZag) public radius!: number;
}

export { ChunkRadiusUpdate };

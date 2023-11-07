import { VarInt, ZigZag, Packet, Serialize } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x46, VarInt)
class ChunkRadiusUpdate extends Encapsulated {
	@Serialize(ZigZag) public radius!: number;
}

export { ChunkRadiusUpdate };

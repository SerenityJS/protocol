import { Packet, Serialize, VarInt } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';
import type { ChunkCoord } from '../types';
import { BlockCoordinate, BlockCoordinates, ChunkCoords } from '../types';

@Packet(0x79, VarInt)
class NetworkChunkPublisherUpdate extends Encapsulated {
	@Serialize(BlockCoordinates) public coordinate!: BlockCoordinate;
	@Serialize(VarInt) public radius!: number;
	@Serialize(ChunkCoords) public savedChunks!: ChunkCoord[];
}

export { NetworkChunkPublisherUpdate };

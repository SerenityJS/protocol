import { Packet, Serialize, VarInt, ZigZag } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';
import { BlockCoordinate, BlockCoordinates } from '../types';

enum SpawnPositionType {
	Player,
	World,
}

@Packet(0x2b, VarInt)
class SetSpawnPosition extends Encapsulated {
	@Serialize(ZigZag) public spawnType!: SpawnPositionType;
	@Serialize(BlockCoordinates) public playerPosition!: BlockCoordinate;
	@Serialize(ZigZag) public dimension!: number;
	@Serialize(BlockCoordinates) public worldPosition!: BlockCoordinate;
}

export { SetSpawnPosition, SpawnPositionType };

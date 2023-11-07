import { VarInt, Long, Packet, Serialize } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x0e, VarInt)
class RemoveEntity extends Encapsulated {
	@Serialize(Long) public uniqueEntityId!: number;
}

export { RemoveEntity };

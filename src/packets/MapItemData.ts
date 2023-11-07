import { VarInt, Long, Packet, Serialize } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x43, VarInt)
class MapItemData extends Encapsulated {
	@Serialize(Long) public mapId!: number;
}

export { MapItemData };

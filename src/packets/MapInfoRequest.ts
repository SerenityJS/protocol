import { Packet, Serialize, VarInt, Long } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x44, VarInt)
class MapInfoRequest extends Encapsulated {
	@Serialize(Long) public uniqueMapId!: number;
}

export { MapInfoRequest };

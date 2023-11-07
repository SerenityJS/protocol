import { Packet, Serialize, Bool, VarInt } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x81, VarInt)
class ClientCacheStatus extends Encapsulated {
	@Serialize(Bool) public enabled!: boolean;
}

export { ClientCacheStatus };

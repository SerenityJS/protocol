import { VarInt, Bool, Long, Packet, Serialize } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x73, VarInt)
class NetworkStackLatency extends Encapsulated {
	@Serialize(Long) public timestamp!: number;
	@Serialize(Bool) public sendBack!: boolean;
}

export { NetworkStackLatency };

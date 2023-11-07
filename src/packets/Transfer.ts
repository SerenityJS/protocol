import { VarInt, Short, LitString, Packet, Serialize } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x55, VarInt)
class Transfer extends Encapsulated {
	@Serialize(LitString) public adress!: string;
	@Serialize(Short) public port!: number;
}

export { Transfer };

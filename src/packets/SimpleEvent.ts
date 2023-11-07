import { VarInt, Short, Packet, Serialize } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x40, VarInt)
class SimpleEvent extends Encapsulated {
	@Serialize(Short) public evenType!: number;
}

export { SimpleEvent };

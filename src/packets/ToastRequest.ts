import { VarInt, BigString, Packet, Serialize } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0xba, VarInt)
class ToastRequest extends Encapsulated {
	@Serialize(BigString) public title!: string;
	@Serialize(BigString) public message!: string;
}

export { ToastRequest };

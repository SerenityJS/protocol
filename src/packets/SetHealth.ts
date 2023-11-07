import { VarInt, Packet, Serialize } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x2a, VarInt)
class SetHealth extends Encapsulated {
	@Serialize(VarInt) public health!: number;
}

export { SetHealth };

import { Packet, Serialize } from '@serenityjs/raknet.js';
import { VarInt, BigString } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x64, VarInt)
class ModalFormRequest extends Encapsulated {
	@Serialize(VarInt) public id!: number;
	@Serialize(BigString) public data!: string;
}

export { ModalFormRequest };

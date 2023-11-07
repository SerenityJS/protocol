import { VarInt, LitString, Packet, Serialize } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x63, VarInt)
class PhotoTransfer extends Encapsulated {
	@Serialize(LitString) public fileName!: string;
	@Serialize(LitString) public imageData!: string;
	@Serialize(LitString) public Unknown2!: string;
}

export { PhotoTransfer };

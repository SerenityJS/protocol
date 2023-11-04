import { Packet, Serialize } from '@serenityjs/raknet.js';
import { VarInt, Short, Bool, UInt8, Float, Int32, LitString } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x65, VarInt)
class ModelFormResponse extends Encapsulated {
	@Serialize(VarInt) public formId!: number;
	@Serialize(LitString) public formData!: string;
}

export { ModelFormResponse };

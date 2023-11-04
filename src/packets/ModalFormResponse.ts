import { Packet, Serialize } from '@serenityjs/raknet.js';
import { Bool, Endianness, VarInt } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';
import { FormData, FormCanceledReason } from '../types';

@Packet(0x65, VarInt)
class ModalFormResponse extends Encapsulated {
	@Serialize(VarInt) public id!: number;
	@Serialize(Bool) public hasData!: boolean;
	@Serialize(FormData, Endianness.Big, 'hasData') public data!: string;
	@Serialize(Bool) public canceled!: boolean;
	@Serialize(FormCanceledReason, Endianness.Big, 'canceled') public cancelReason!: string;
}

export { ModalFormResponse };

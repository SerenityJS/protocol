import type { Endianness } from 'binarystream.js';
import { DataType } from 'binarystream.js';
import type { Encapsulated } from '../Encapsulated';
import type { FormCancelReason } from '../enums';

class FormCanceledReason extends DataType {
	public static read(stream: Encapsulated, endian: Endianness, canceled: boolean): FormCancelReason | null {
		if (!canceled) return null;

		return stream.readUInt8();
	}
	public static write(stream: Encapsulated, value: FormCancelReason, endian: Endianness, canceled: boolean): void {
		if (!canceled) return;

		stream.writeUInt8(value);
	}
}

export { FormCanceledReason };

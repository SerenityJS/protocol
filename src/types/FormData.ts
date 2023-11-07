import type { Endianness } from '@serenityjs/binarystream';
import { DataType } from '@serenityjs/raknet.js';
import type { Encapsulated } from '../Encapsulated';

// TODO: Parse the JSON data
class FormData extends DataType {
	public static read(stream: Encapsulated, endian: Endianness, hasData: boolean): string | null {
		if (!hasData) return null;

		return stream.readBigString();
	}
	public static write(stream: Encapsulated, value: string, endian: Endianness, hasData: boolean): void {
		if (!hasData) return;

		stream.writeBigString(value);
	}
}

export { FormData };

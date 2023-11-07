import type { Endianness } from '@serenityjs/binarystream';
import { DataType } from '@serenityjs/raknet.js';
import type { Encapsulated } from '../Encapsulated';
import { ChatTypes } from '../enums';

class TextParameters extends DataType {
	public static read(stream: Encapsulated, endian: Endianness, type: ChatTypes): string[] | null {
		if (type === ChatTypes.Translation || type === ChatTypes.Popup || type === ChatTypes.JukeboxPopup) {
			const params: string[] = [];
			const length = stream.readVarInt();
			for (let i = 0; i < length; i++) {
				params.push(stream.readBigString());
			}

			return params;
		} else {
			return null;
		}
	}
	public static write(stream: Encapsulated, value: string[], endian: Endianness, type: ChatTypes): void {
		if (type === ChatTypes.Translation || type === ChatTypes.Popup || type === ChatTypes.JukeboxPopup) {
			stream.writeVarInt(value.length);
			for (const param of value) {
				stream.writeBigString(param);
			}
		}
	}
}

export { TextParameters };

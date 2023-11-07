import type { Endianness } from '@serenityjs/binarystream';
import { DataType } from '@serenityjs/raknet.js';
import type { Encapsulated } from '../Encapsulated';
import { ChatTypes } from '../enums';

class TextSource extends DataType {
	public static read(stream: Encapsulated, endian: Endianness, type: ChatTypes): string | null {
		if (type === ChatTypes.Chat || type === ChatTypes.Whisper || type === ChatTypes.Announcement) {
			return stream.readBigString();
		} else {
			return null;
		}
	}
	public static write(stream: Encapsulated, value: string, endian: Endianness, type: ChatTypes): void {
		if (type === ChatTypes.Chat || type === ChatTypes.Whisper || type === ChatTypes.Announcement) {
			stream.writeBigString(value);
		}
	}
}

export { TextSource };

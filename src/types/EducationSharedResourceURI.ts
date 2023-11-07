import { DataType } from '@serenityjs/raknet.js';
import type { Encapsulated } from '../Encapsulated';

interface eduResourceUri {
	buttonName: string;
	linkUri: string;
}

class EducationSharedResourceURI extends DataType {
	public static read(stream: Encapsulated): eduResourceUri {
		const buttonName = stream.readBigString();
		const linkUri = stream.readBigString();

		return { buttonName, linkUri };
	}
	public static write(stream: Encapsulated, value: eduResourceUri): void {
		stream.writeBigString(value.buttonName);
		stream.writeBigString(value.linkUri);
	}
}

export { EducationSharedResourceURI, type eduResourceUri };

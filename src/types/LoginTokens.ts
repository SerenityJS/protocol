import { DataType } from '@serenityjs/raknet.js';
import type { Encapsulated } from '../Encapsulated';

interface Tokens {
	client: string;
	identity: string;
	length: number;
}

// TODO: calculate the length of the strings so the length field is not needed
class LoginTokens extends DataType {
	public static read(stream: Encapsulated): Tokens {
		const length = stream.readVarInt();
		const identity = stream.readLittleString();
		const client = stream.readLittleString();

		return { client, identity, length };
	}
	public static write(stream: Encapsulated, value: Tokens): void {
		stream.writeVarInt(value.length);
		stream.writeLittleString(value.identity);
		stream.writeLittleString(value.client);
	}
}

export { LoginTokens, type Tokens };

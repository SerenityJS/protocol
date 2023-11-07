import { Endianness } from '@serenityjs/binarystream';
import { Packet, Serialize, VarInt, UInt8, Bool, BigString } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';
import { ChatTypes } from '../enums';
import { TextSource, TextParameters } from '../types';

@Packet(0x09, VarInt)
class Text extends Encapsulated {
	@Serialize(UInt8) public type!: ChatTypes;
	@Serialize(Bool) public needsTranslation!: boolean;
	@Serialize(TextSource, Endianness.Big, 'type') public source!: string;
	@Serialize(BigString) public message!: string;
	@Serialize(TextParameters, Endianness.Big, 'type') public params!: string[];
	@Serialize(BigString) public xuid!: string;
	@Serialize(BigString) public platformChatId!: string;
}

export { Text };

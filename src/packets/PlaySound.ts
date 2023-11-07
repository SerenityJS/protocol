import { Endianness } from '@serenityjs/binarystream';
import { VarInt, Float32, LitString, Packet, Serialize } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x56, VarInt)
class PlaySound extends Encapsulated {
	@Serialize(LitString) public soundName!: string;
	// add the position type later
	// @Serialize(LitString) public soundPosition!: string;
	@Serialize(Float32, Endianness.Little) public volume!: number;
	@Serialize(Float32, Endianness.Little) public pitch!: number;
}

export { PlaySound };

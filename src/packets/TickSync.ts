import { Endianness } from '@serenityjs/binarystream';
import { VarInt, Long, Packet, Serialize } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x17, VarInt)
class TickSync extends Encapsulated {
	@Serialize(Long, Endianness.Little) public requestTime!: bigint;
	@Serialize(Long, Endianness.Little) public responseTime!: bigint;
}

export { TickSync };

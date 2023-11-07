import { VarInt, UInt8, Packet, Serialize } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x45, VarInt)
class RequestChunkRadius extends Encapsulated {
	@Serialize(VarInt) public chunkRadius!: number;
	@Serialize(UInt8) public maxRadius!: number;
}

export { RequestChunkRadius };

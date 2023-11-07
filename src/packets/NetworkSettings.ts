import { Endianness } from '@serenityjs/binarystream';
import { Packet, Serialize, VarInt, Short, Bool, UInt8, Float32 } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';
import { CompressionMethod } from '../enums';

@Packet(0x8f, VarInt)
class NetworkSettings extends Encapsulated {
	@Serialize(Short) public compressionThreshold!: number;
	@Serialize(Short) public compressionMethod!: CompressionMethod;
	@Serialize(Bool) public clientThrottle!: boolean;
	@Serialize(UInt8) public clientThreshold!: number;
	@Serialize(Float32, Endianness.Little) public clientScalar!: number;
}

export { NetworkSettings };

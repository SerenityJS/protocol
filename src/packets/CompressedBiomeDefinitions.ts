import { Packet, Serialize, VarInt, BigString } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x12d, VarInt)
class CompressedBiomeDefinitions extends Encapsulated {
	@Serialize(BigString) public raw_payload!: string;
}

export { CompressedBiomeDefinitions };

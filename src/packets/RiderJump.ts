import { VarInt, Packet, Serialize } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x14, VarInt)
class RiderJump extends Encapsulated {
	@Serialize(VarInt) public jumpStrength!: number;
}

export { RiderJump };

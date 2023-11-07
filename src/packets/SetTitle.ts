import { Packet, Serialize, VarInt, LitString } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x58, VarInt)
class SetTitle extends Encapsulated {
	@Serialize(VarInt) public type!: number;
	@Serialize(LitString) public text!: string;
	@Serialize(VarInt) public fadeInTime!: number;
	@Serialize(VarInt) public stayTime!: number;
	@Serialize(VarInt) public fadeOutTime!: number;
}

export { SetTitle };

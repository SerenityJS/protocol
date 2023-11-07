import { Bool, UInt8, VarInt, ZigZag, Packet, Serialize } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x22, VarInt)
class BlockPickRequest extends Encapsulated {
	@Serialize(ZigZag) public x!: number;
	@Serialize(ZigZag) public y!: number;
	@Serialize(ZigZag) public z!: number;
	@Serialize(Bool) public addUserData!: boolean;
	@Serialize(UInt8) public selectedSlot!: number;
}

export { BlockPickRequest };

import { Packet, Serialize, VarInt, Long } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';
import { CreditStatus } from '../enums';

@Packet(0x4a, VarInt)
class BossEvent extends Encapsulated {
	@Serialize(Long) public bossEntityID!: number;
	@Serialize(VarInt) public status!: CreditStatus;
}

export { BossEvent };

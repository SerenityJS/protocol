import { Endianness } from '@serenityjs/binarystream';
import { Packet, Serialize, VarInt } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';
import type { PlayerListRecord } from '../types';
import { PlayerListRecords, PlayerListType } from '../types';

@Packet(0x3f, VarInt)
class PlayerList extends Encapsulated {
	@Serialize(VarInt) public type!: PlayerListType;
	@Serialize(PlayerListRecords, Endianness.Big, 'type') public records!: PlayerListRecord[];
}

export { PlayerList };

export { PlayerListType, type PlayerListRecord } from '../types';

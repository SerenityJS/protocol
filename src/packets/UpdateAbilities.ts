import { Endianness } from '@serenityjs/binarystream';
import { Packet, Serialize, VarInt, Int64, UInt8 } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';
import { PermissionLevel } from '../enums';
import type { AbilityLayer } from '../types';
import { AbilityLayers } from '../types';

@Packet(0xbb, VarInt)
class UpdateAbilities extends Encapsulated {
	@Serialize(Int64, Endianness.Little) public uniqueId!: bigint;
	@Serialize(UInt8) public permissionLevel!: PermissionLevel;
	@Serialize(UInt8) public commandsPermission!: number;
	@Serialize(AbilityLayers) public abilities!: AbilityLayer[];
}

export { UpdateAbilities };

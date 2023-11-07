import { Packet, Serialize, VarInt, Bool } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';
import { PermissionLevel } from '../enums';

@Packet(0x37, VarInt)
class AdventureSettings extends Encapsulated {
	@Serialize(VarInt) public flags!: number;
	@Serialize(VarInt) public commandPermission!: number;
	@Serialize(VarInt) public actionPermission!: number;
	@Serialize(VarInt) public permissionLevel!: PermissionLevel;
	@Serialize(VarInt) public customStoredPermissions!: number;
	@Serialize(Bool) public userId!: boolean;
}

export { AdventureSettings };

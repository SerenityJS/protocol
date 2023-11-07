import { Endianness } from '@serenityjs/binarystream';
import {
	Packet,
	Serialize,
	VarInt,
	Uuid,
	BigString,
	VarLong,
	Float32,
	ZigZag,
	Int64,
	UInt8,
	Int32,
} from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';
import { PermissionLevel, Gamemode } from '../enums';
import { Vec3f, Vector3f, Vec2f, Vector2f } from '../types';

@Packet(0x0c, VarInt)
class AddPlayer extends Encapsulated {
	@Serialize(Uuid) public uuid!: string;
	@Serialize(BigString) public username!: string;
	@Serialize(VarLong) public runtimeId!: bigint;
	@Serialize(BigString) public platformChatId!: string;
	@Serialize(Vector3f) public position!: Vec3f;
	@Serialize(Vector3f) public velocity!: Vec3f;
	@Serialize(Vector2f) public rotation!: Vec2f;
	@Serialize(Float32, Endianness.Little) public headYaw!: number;
	@Serialize(ZigZag) public item!: number;
	@Serialize(ZigZag) public gamemode!: Gamemode;
	@Serialize(VarInt) public metadata!: number;
	@Serialize(VarInt) public propertiesInts!: number;
	@Serialize(VarInt) public propertiesFloats!: number;
	@Serialize(Int64, Endianness.Little) public uniqueId!: bigint;
	@Serialize(UInt8) public permissionLevel!: PermissionLevel;
	@Serialize(UInt8) public commandPermission!: number;
	@Serialize(UInt8) public abilities!: number;
	@Serialize(VarInt) public links!: number;
	@Serialize(BigString) public deviceId!: string;
	@Serialize(Int32, Endianness.Little) public deviceOS!: number;
}

export { AddPlayer };

import { Endianness } from '@serenityjs/binarystream';
import { Packet, Serialize, VarInt, Float32, UInt8, Bool, VarLong } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';
import { Vec3f, Vector3f, MovementCause, MoveMode, TeleportCause } from '../types';

@Packet(0x13, VarInt)
class MovePlayer extends Encapsulated {
	@Serialize(VarLong) public runtimeId!: bigint;
	@Serialize(Vector3f) public position!: Vec3f;
	@Serialize(Float32, Endianness.Little) public pitch!: number;
	@Serialize(Float32, Endianness.Little) public yaw!: number;
	@Serialize(Float32, Endianness.Little) public headYaw!: number;
	@Serialize(UInt8) public mode!: MoveMode;
	@Serialize(Bool) public onGround!: boolean;
	@Serialize(VarLong) public ridingRuntimeId!: bigint;
	@Serialize(MovementCause, Endianness.Little, 'mode') public cause!: TeleportCause;
	@Serialize(VarLong) public tick!: bigint;
}

export { MovePlayer };

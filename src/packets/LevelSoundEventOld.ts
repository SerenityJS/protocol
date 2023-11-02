import { Packet, Serialize } from '@serenityjs/raknet.js';
import { Bool, UInt8, VarInt, ZigZag } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';
import { Vec3f, Vector3f } from '../types';

@Packet(0x18, VarInt)
class LevelSoundEventOld extends Encapsulated {
	@Serialize(UInt8) public soundId!: number;
	@Serialize(Vector3f) public position!: Vec3f;
	@Serialize(ZigZag) public blockId!: number;
	@Serialize(ZigZag) public entityType!: number;
	@Serialize(Bool) public isBabyMob!: boolean;
	@Serialize(Bool) public isGlobal!: boolean;
}

export { LevelSoundEventOld };

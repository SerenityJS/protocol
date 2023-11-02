import { Packet, Serialize } from '@serenityjs/raknet.js';
import { BigString, VarInt, VarLong, ZigZag, ZigZong } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';
import { Vec3f, Vector3f } from '../types';

@Packet(0x16, VarInt)
class AddPainting extends Encapsulated {
	@Serialize(ZigZong) public uniqueEntityId!: bigint;
	@Serialize(VarLong) public runtimeId!: bigint;
	@Serialize(Vector3f) public position!: Vec3f;
	@Serialize(ZigZag) public direction!: number;
	@Serialize(BigString) public title!: string;
}

export { AddPainting };

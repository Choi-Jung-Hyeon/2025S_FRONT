"use client";

import * as Dialog from "../components/ui/dialog"; // Shadcn UI에서 생성된 Dialog 컴포넌트 경로 (프로젝트에 맞게 조정)
import { Pokemon } from "../lib/types"; // 포켓몬 타입 정의 (필요 시 작성)
import React from "react";

interface PokemonDetailDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  pokemon: Pokemon | null;
}

export default function PokemonDetailDialog({
  open,
  onOpenChange,
  pokemon,
}: PokemonDetailDialogProps) {
  return (
    <Dialog.Dialog open={open} onOpenChange={onOpenChange}>
      <Dialog.DialogOverlay className="fixed inset-0 bg-black/50" />
      <Dialog.DialogContent className="fixed top-1/2 left-1/2 max-w-lg w-full -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-6 shadow-lg">
        <Dialog.DialogTitle className="text-xl font-bold mb-4">
          {pokemon?.name ?? "상세 정보"}
        </Dialog.DialogTitle>
        {pokemon ? (
          <div className="space-y-2">
            <p><strong>Height:</strong> {pokemon.height}</p>
            <p><strong>Weight:</strong> {pokemon.weight}</p>
            <p><strong>Types:</strong> {pokemon.types.join(", ")}</p>
          </div>
        ) : (
          <p>포켓몬 정보를 불러올 수 없습니다.</p>
        )}
        <Dialog.DialogClose className="mt-4 inline-block rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
          닫기
        </Dialog.DialogClose>
      </Dialog.DialogContent>
    </Dialog.Dialog>
  );
}
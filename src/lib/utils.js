import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function slugify(text) {
  if (!text) return "";
  
  return text
    .toString()
    .toLowerCase()
    .normalize('NFD') // Chuẩn hóa Unicode
    .replace(/[\u0300-\u036f]/g, '') // Bỏ các dấu thanh
    .replace(/đ/g, 'd') // Thay 'đ' thành 'd'
    .replace(/\s+/g, '-') // Thay khoảng trắng bằng gạch nối
    .replace(/[^\w-]+/g, '') // Bỏ các ký tự không phải chữ, số, gạch nối
    .replace(/--+/g, '-') // Thay nhiều gạch nối thành một
    .replace(/^-+/, '') // Bỏ gạch nối ở đầu
    .replace(/-+$/, ''); // Bỏ gạch nối ở cuối
}
/* ===== pages\Training\Detail\components\RegistrationCta.jsx ===== */
"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from "sonner";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
    hoTenPhuHuynh: z.string().min(2, { message: "Vui lòng nhập tên phụ huynh." }),
    soDienThoai: z.string().regex(/^(0[3|5|7|8|9])+([0-9]{8})$/, { message: "Số điện thoại không hợp lệ." }),
    email: z.string().email({ message: "Địa chỉ email không hợp lệ." }),
    hoTenHocVien: z.string().min(2, { message: "Vui lòng nhập tên học viên." }),
    ngaySinhHocVien: z.string().min(1, { message: "Vui lòng nhập ngày sinh của học viên." }),
    diaChi: z.string().min(5, { message: "Vui lòng nhập địa chỉ." }),
    ghiChu: z.string().optional(),
});

function RegistrationCta({ courseTitle }) {
    const [open, setOpen] = useState(false);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            hoTenPhuHuynh: "",
            soDienThoai: "",
            email: "",
            hoTenHocVien: "",
            ngaySinhHocVien: "",
            diaChi: "",
            ghiChu: "",
        },
    });

    function onSubmit(values) {
        console.log("Dữ liệu đăng ký:", {
            ...values,
            khoaHoc: courseTitle,
        });
        toast.success("Đăng ký thành công!", {
            description: "Cảm ơn bạn đã đăng ký. A&U sẽ liên hệ với bạn sớm nhất.",
        });
        form.reset();
        setOpen(false);
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <section className="bg-white py-20">
                <div className="container mx-auto px-4">
                    <div className="bg-orange-500 rounded-2xl p-8 md:p-12 text-center text-white">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            Sẵn sàng để bắt đầu?
                        </h2>
                        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-orange-100">
                            Đăng ký ngay để nhận tư vấn chi tiết về lộ trình học và kiểm tra trình độ miễn phí tại A&U English.
                        </p>
                        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <DialogTrigger asChild>
                                <Button size="lg" variant="outline" className="bg-white text-orange-600 hover:bg-orange-50 transition-transform hover:scale-105 cursor-pointer">
                                    Đăng ký khoá học
                                </Button>
                            </DialogTrigger>
                            <Button asChild size="lg" className="bg-white/20 hover:bg-white/30 text-white transition-transform hover:scale-105">
                                <Link href="/training">
                                    Khám phá khóa học khác <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <DialogContent className="sm:max-w-2xl bg-white p-8">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-gray-900">Đăng ký khóa học: {courseTitle}</DialogTitle>
                    <DialogDescription>
                        Vui lòng điền đầy đủ thông tin bên dưới. A&U sẽ liên hệ với bạn để tư vấn chi tiết.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pt-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="hoTenPhuHuynh"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Họ và tên phụ huynh</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Nguyễn Văn A" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="soDienThoai"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Số điện thoại</FormLabel>
                                        <FormControl>
                                            <Input type="tel" placeholder="09xxxxxxxx" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                         <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input type="email" placeholder="example@email.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="hoTenHocVien"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Họ và tên học viên</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Nguyễn Thị B" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="ngaySinhHocVien"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Ngày sinh học viên</FormLabel>
                                        <FormControl>
                                            <Input type="date" className="cursor-pointer" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            control={form.control}
                            name="diaChi"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Địa chỉ</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Số nhà, tên đường, phường/xã, quận/huyện..." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="ghiChu"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Ghi chú (tùy chọn)</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Ví dụ: Cần tư vấn thêm về lịch học buổi tối..." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {/* SỬA ĐỔI: Thêm class `cursor-pointer` */}
                        <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-base text-white cursor-pointer" size="lg" disabled={form.formState.isSubmitting}>
                            {form.formState.isSubmitting ? "Đang gửi..." : "Gửi Đăng Ký"}
                        </Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}

export default RegistrationCta;
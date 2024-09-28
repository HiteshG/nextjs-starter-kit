"use client"
import { useForm } from 'react-hook-form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

export default function Footer() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();


    const onSubmit = async (data: any) => {

    };
    return (
        <footer>
            <div className="mx-auto max-w-screen-xl justify-center">
                    <div className="py-8">
                            <ul className="flex flex-wrap gap-4 text-xs justify-center">
                                <li>
                                    <a href="/" target="_blank" className="transition hover:opacity-75">Terms & Conditions </a>
                                </li>

                                <li>
                                    <a href="/" target="_blank" className="transition hover:opacity-75">Privacy Policy </a>
                                </li>
                            </ul>

                            <p className="mt-8 text-xs  ">&copy; 2024. SomeCompany LLC. All rights reserved.</p>
                    </div>
                </div>
        </footer>

    )
}
